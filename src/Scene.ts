import { createElement } from "./utils";

const source: SceneConfig[] = require("./data/scenes.json");

export type SceneConfig = Array<string | ActionConfig>;

export type Condition = [string, boolean];

export type ActionConfig = {
  text?: string;
  move?: string;
  item?: string;
  image?: string;
  change?: Condition;
  condition?: Condition | Condition[];
  highlight?: string;
};

type Item = {
  name: string;
  title: string;
};

export default class Scene {
  private static instance = new Scene();

  private container: HTMLElement = createElement("container");
  private scene: HTMLElement = createElement("scene");

  private target: string = null;
  private inventory: Item[] = [];
  private condition: {
    [name: string]: boolean;
  } = {};

  static getInstance() {
    return this.instance;
  }

  constructor() {
    if (Scene.instance != null) {
      throw new TypeError("Can't instantiate a singleton.");
    }
  }

  init() {
    document.body.appendChild(this.container);
    this.container.appendChild(this.scene);
  }

  handleClick = ({ target }: MouseEvent) => {
    if (target instanceof HTMLElement && target.tagName === "SPAN") {
      const config = source[this.target];
      const text = target.innerText;
      const action: ActionConfig = config.find((item) =>
        typeof item === "string" ? false : item.highlight === text
      ) as ActionConfig;

      if (action != null) {
        this.handleAction(action);
      }
    }
  };

  setCondition([name, value]: Condition) {
    this.condition[name] = value;
  }

  addItemToInventory(name: string, title: string) {
    this.inventory.push({
      name,
      title,
    });
  }

  handleAction({ change, item, highlight, move }: ActionConfig) {
    if (change != null) {
      this.setCondition(change);
    }

    if (item != null) {
      this.addItemToInventory(item, highlight);
      this.showInventoryAlert(highlight, move);
      return;
    }

    this.render(move != null ? move : this.target);
  }

  showInventoryAlert(title: string, target?: string) {
    const alert = createElement("alert");
    alert.innerHTML = `Теперь у тебя есть ${title}`;

    const handleClick = () => {
      this.container.removeEventListener("click", handleClick);
      this.container.classList.remove("alert");
      alert.parentNode.removeChild(alert);
      this.render(target != null ? target : this.target);
      this.container.appendChild(this.scene);
    };

    this.container.classList.add("alert");
    this.scene.parentNode.removeChild(this.scene);
    this.container.addEventListener("click", handleClick);
    this.container.appendChild(alert);
  }

  checkCondition(condition: Condition | Condition[]) {
    if (condition != null) {
      if (Array.isArray(condition[0])) {
        const array = condition as Array<Condition>;
        return array.every((value) => this.checkCondition(value));
      }

      const [name, value] = condition;
      const target = this.condition[name];
      if (target != null) {
        return target === value;
      }

      return !value;
    }

    return true;
  }

  renderLine = (previous: string, config: string | ActionConfig) => {
    if (typeof config === "string") {
      return `${previous}<p>${config}</p>`;
    }

    const { text, image, condition, highlight } = config;

    if (!this.checkCondition(condition)) {
      return previous;
    }

    if (image != null) {
      return `${previous}<p class="image_${image} sticker "></p>`;
    }

    if (highlight != null) {
      return `${previous}<p>${text.replace(
        highlight,
        `<span>${highlight}</span>`
      )}</p>`;
    }

    return `${previous}<p>${text}</p>`;
  };

  render(target: string) {
    this.target = target;
    const config = source[target];
    const html = config.reduce<string>(this.renderLine, "");
    this.scene.innerHTML = html;
    this.container.addEventListener("click", this.handleClick);
  }
}
