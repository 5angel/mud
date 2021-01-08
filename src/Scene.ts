import { createElement } from "./utils";

const source: SceneConfig[] = require("./data/scenes.json");

export type SceneConfig = Array<string | ActionConfig>;

export type Condition = [string, boolean];

export type ActionConfig = {
  text?: string;
  name?: string;
  condition?: Condition | Condition[];
  highlight?: string;
  item?: boolean;
  change?: boolean;
  move?: string;
};

type Item = {
  name: string;
  title: string;
};

export default class Scene {
  private static instance = new Scene();

  private container: HTMLElement = createElement("container");
  private config: SceneConfig = null;
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
      const text = target.innerText;
      const action: ActionConfig = this.config.find((item) =>
        typeof item === "string" ? false : item.highlight === text
      ) as ActionConfig;

      if (action != null) {
        this.handleAction(action);
      }
    }
  };

  handleAction({ change, item, name, highlight: title, move }: ActionConfig) {
    if (change != null) {
      this.condition[name] = change;
    }

    if (item) {
      this.inventory.push({
        name,
        title,
      });
      this.showInventoryAlert(title, move);
      return;
    }

    if (move != null) {
      this.render(source[move]);
      return;
    }

    this.render();
  }

  showInventoryAlert(title: string, target?: string) {
    const handleClick = () => {
      this.container.removeEventListener("click", handleClick);
      this.container.classList.remove("alert");

      if (target != null) {
        this.render(source[target]);
        return;
      }

      this.render();
    };

    this.container.innerHTML = `Теперь у тебя есть «${title}»`;
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

  render(config?: SceneConfig) {
    if (config != null) {
      this.config = config;
    }

    if (this.config == null) {
      this.config = source["room"];
    }

    const html = this.config.reduce<string>((result, value) => {
      if (typeof value === "string") {
        return `${result}<p>${value}</p>`;
      }

      const { condition, name, text, highlight } = value;

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
