export enum UserType {
  Customers = "CUSTOMERS",
  InventoryManager = "INVENTORY_MANAGERS",
  BranchManager = "BRANCH_MANAGERS",
}

export const RoleOrder = [
  UserType.BranchManager,
  UserType.InventoryManager,
  UserType.Customers,
];

export type UserDTO = {
  email: string;
  type: UserType;
  password: string;
};
