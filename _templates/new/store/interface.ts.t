---
to: "src/interfaces/I<%= h.inflection.camelize(name) %>.ts"
---
export interface I<%= h.inflection.camelize(name) %> {
  /**
   * define your data structure here
   */
  id?: string;
}
