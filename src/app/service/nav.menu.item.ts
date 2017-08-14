/**
 * NavMenuItem represents an item within a navigation menu.
 * It can be either the leaf node, or contain another menu.
 */
export interface NavMenuItem {
  readonly id: string;
  readonly url?: string;
  readonly items?: NavMenuItem[];
}
