declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
  export const counter: string;
}

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.scss" {
  const content: string;
  export default content;
}

declare module "*.sass" {
  const content: string;
  export default content;
}
