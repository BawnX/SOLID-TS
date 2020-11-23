interface Printer {
  printPage(Page: string): void;
}

export class StandardConsole implements Printer {
  public printPage(Page: string): void {
    console.log(Page);
  }
}

export class StandardConsoleHtml implements Printer {
  public printPage(Page: string): void {
    console.log(`<div>${Page}</div>`);
  }
}
