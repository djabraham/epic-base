
export default class ActionLogEntry {
    name: string;
    logProperties: { [key: string]: string };

    constructor(name: string, logProperties?: { [key: string]: string }) {
        this.name = name;
        this.logProperties = logProperties;
    }

    toString(): string {
      if (this.logProperties)
        return `${this.name} | ${JSON.stringify(this.logProperties)}`;
      else
        return `${this.name}`;
    }
}