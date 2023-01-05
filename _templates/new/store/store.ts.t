---
to: "src/store/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>.ts"
---
import { I<%= h.inflection.camelize(name) %> } from '~/interfaces/I<%= h.inflection.camelize(name) %>';

export interface I<%= h.inflection.camelize(name) %>State {
  <%= h.inflection.pluralize(name) %>: Array<I<%= h.inflection.camelize(name) %>>;
  current<%= h.inflection.camelize(name) %>?: I<%= h.inflection.camelize(name) %>;
  error: unknown;
}

export const use<%= h.inflection.camelize(name) %>Store = defineStore('<%= h.inflection.dasherize(h.inflection.underscore(name)) %>', {
  state: (): I<%= h.inflection.camelize(name) %>State => {
    return {
      <%= h.inflection.pluralize(name) %>: [],
      current<%= h.inflection.camelize(name) %>: undefined,
      error: null,
    };
  },
  getters: {
    get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>(state) {
      return state.<%= h.inflection.pluralize(name) %>;
    },
    getCurrent<%= h.inflection.camelize(name) %>(state) {
      return state.current<%= h.inflection.camelize(name) %>;
    },
    getError(state) {
      return state.error;
    },
  },
  actions: {
    async fetch<%= h.inflection.camelize(name) %>s() {
      try {
        this.<%= h.inflection.pluralize(name) %> = await $fetch<Array<I<%= h.inflection.camelize(name) %>>>('/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>', {
          method: 'GET',
        });
      } catch (e) {
        this.error = e;
      }
    },
    async fetch<%= h.inflection.camelize(name) %>(id: string) {
      try {
        this.current<%= h.inflection.camelize(name) %> = await $fetch<I<%= h.inflection.camelize(name) %>>(`/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/${id}`, {
          method: 'GET',
        });
      } catch (e) {
        this.error = e;
      }
    },
    async create<%= h.inflection.camelize(name) %>(<%= name %>: I<%= h.inflection.camelize(name) %>) {
      try {
        const new<%= h.inflection.camelize(name) %> = await $fetch<I<%= h.inflection.camelize(name) %>>(`/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>`, {
          method: 'POST',
          body: JSON.stringify(<%= name %>),
        });

        this.<%= h.inflection.pluralize(name) %>.push(new<%= h.inflection.camelize(name) %>);
        this.current<%= h.inflection.camelize(name) %> = new<%= h.inflection.camelize(name) %>;
      } catch (e) {
        this.error = e;
      }
    },
    async update<%= h.inflection.camelize(name) %>(<%= name %>: Partial<I<%= h.inflection.camelize(name) %>>) {
      try {
        const updated<%= h.inflection.camelize(name) %> = await $fetch<I<%= h.inflection.camelize(name) %>>(`/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/${<%= name %>.id}`, {
          method: 'PUT',
          body: JSON.stringify(<%= name %>),
        });
        const idx = this.<%= h.inflection.pluralize(name) %>.findIndex((item) => item.id === updated<%= h.inflection.camelize(name) %>.id);
        this.<%= h.inflection.pluralize(name) %>.splice(idx, 1, updated<%= h.inflection.camelize(name) %>);
        this.current<%= h.inflection.camelize(name) %> = updated<%= h.inflection.camelize(name) %>;
      } catch (e) {
        this.error = e;
      }
    },
    async delete<%= h.inflection.camelize(name) %>(<%= name %>: Partial<I<%= h.inflection.camelize(name) %>>) {
      try {
        await $fetch<I<%= h.inflection.camelize(name) %>>(`/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/${<%= name %>.id}`, {
          method: 'DELETE',
        });
        const idx = this.<%= h.inflection.pluralize(name) %>.findIndex((item) => item.id === <%= name%>.id);
        this.<%= h.inflection.pluralize(name) %>.splice(idx, 1);
      } catch (e) {
        this.error = e;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(use<%= h.inflection.camelize(name) %>Store, import.meta.hot));
}
