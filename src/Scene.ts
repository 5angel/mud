import { createElement } from "./utils";

const source: SceneConfig[] = require("./data/scenes.json");

export type SceneConfig = Array<string | ActionConfig>;

export type Condition = [string, boolean];

export type ActionConfig = {
  text?: string;
  condition?: Condition | Condition[];
  highlight?: string;
  item?: string;
  change?: Condition;
  move?: string;
};

type Item = {
  name: string;
  title: string;
};

export default class Scene {
  private static instance = new Scene();

  private container: HTMLElement = createElement("container");
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
    document.body.append(this.container);
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
    const handleClick = () => {
      this.container.removeEventListener("click", handleClick);
      this.container.classList.remove("alert");
      this.render(target != null ? target : this.target);
    };

    this.container.innerHTML = `<span>Теперь у тебя есть «${title}»</span>`;
    this.container.classList.add("alert");
    this.container.addEventListener("click", handleClick);
  }

  checkCondition(condition: Condition | Condition[]) {
    if (Array.isArray(condition[0])) {
      const array = condition as Array<Condition>;
      return array.every((value) => this.checkCondition(value));
    }

    if (typeof condition[0] === "string") {
      const [name, value] = condition;
      const target = this.condition[name];
      if (target != null) {
        return target === value;
      }

      return !value;
    }

    throw new TypeError("invalid condition");
  }

  render(target: string) {
    this.target = target;

    const config = source[target];

    const html = config.reduce<string>((result, value) => {
      if (typeof value === "string") {
        return `${result}<p>${value}</p>`;
      }

      const { condition, text, highlight } = value;

      // Условие не выполнено
      if (condition != null && !this.checkCondition(condition)) {
        return result;
      }

      if (highlight != null) {
        return `${result}<p>${text.replace(
          highlight,
          `<span>${highlight}</span>`
        )}</p>`;
      }

      return `${result}<p>${text}</p>`;
    }, "");

    this.container.innerHTML = html;

    this.container.addEventListener("click", this.handleClick);
  }
}
