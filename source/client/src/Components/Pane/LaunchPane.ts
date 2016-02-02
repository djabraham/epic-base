
import React = require("react");

export enum LaunchPaneType {
  BLEEDING,     // zone styling for tighter control over layout
  BUFFERED      // area styling for common control over layout
}

export interface ILaunchPaneSectProps {
  def: ILaunchPane
};

export interface ILaunchPane {
  ref: string;
  label: string;
  icon: string;
  active: boolean;
  type: LaunchPaneType;
  comp: React.ComponentClass<ILaunchPaneSectProps>;
};

export class LaunchPane implements ILaunchPane {
  constructor(
    public ref: string,
    public label: string,
    public icon: string,
    public active: boolean,
    public type: LaunchPaneType,
    public comp: React.ComponentClass<ILaunchPaneSectProps>) {
      // init
  };

  getTabRef(): string {
    return this.ref + "_tab";
  }

  getSectRef(): string {
    return this.ref + "_sect";
  }

  getTabClassName(): string {
    if (this.active)
      return "active";
    else
      return undefined;
  }

  getSectClassName(): string {
    switch (this.type) {
      case LaunchPaneType.BLEEDING:
        return "area-bleeding disp-fade";
      case LaunchPaneType.BUFFERED:
        return "area-buffered disp-fade scroll-mini scroll-y";
    }
  }

  getSectStyleDisplay(): string {
    if (this.active)
      return "block";
    else
      return "none";
  }
}

