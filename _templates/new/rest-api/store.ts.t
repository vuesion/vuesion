---
to: "src/app/store/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>.ts"
unless_exists: true
---
import { acceptHMRUpdate, defineStore } from 'pinia';
import type { IFetchError } from 'ofetch';
import type { I<%= h.inflection.camelize(name) %>, I<%= h.inflection.camelize(name) %>Create, I<%= h.inflection.camelize(name) %>Update } from '#shared/interfaces/domain/I<%= h.inflection.camelize(name) %>';
import type { IListQuery } from '#shared/interfaces/api/IListQuery';
import type { IPaginatedResponse } from '#shared/interfaces/api/IPaginatedResponse';
import { $fetchWithCookies } from '@/utils/fetch-with-cookies';
import { handleStoreError } from '@/utils/handle-store-error';
import { getQueryParams } from '@/utils/get-query-params';

export interface I<%= h.inflection.camelize(name) %>State {
  <%= h.inflection.pluralize(name) %>: Array<I<%= h.inflection.camelize(name) %>>;
  <%= h.inflection.camelize(name, true) %>Count: number;
  current<%= h.inflection.camelize(name) %>?: I<%= h.inflection.camelize(name) %>;
  error: IFetchError | null | undefined;
}

export const use<%= h.inflection.camelize(name) %>Store = defineStore('<%= h.inflection.dasherize(h.inflection.underscore(name)) %>', {
  state: (): I<%= h.inflection.camelize(name) %>State => {
    return {
      <%= h.inflection.pluralize(name) %>: [],
      <%= h.inflection.camelize(name, true) %>Count: 0,
      current<%= h.inflection.camelize(name) %>: undefined,
      error: null,
    };
  },
  getters: {
    get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>(state: I<%= h.inflection.camelize(name) %>State) {
      return state.<%= h.inflection.pluralize(name) %>;
    },
    get<%= h.inflection.camelize(name) %>Count(state: I<%= h.inflection.camelize(name) %>State) {
      return state.<%= h.inflection.camelize(name, true) %>Count;
    },
    getCurrent<%= h.inflection.camelize(name) %>(state: I<%= h.inflection.camelize(name) %>State) {
      return state.current<%= h.inflection.camelize(name) %>;
    },
    getError(state: I<%= h.inflection.camelize(name) %>State) {
      return state.error;
    },
  },
  actions: {
    async fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %>(params: IListQuery) {
      try {
        this.error = null;
        const res = await $fetchWithCookies<IPaginatedResponse<I<%= h.inflection.camelize(name) %>>>(
          `/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>${getQueryParams(params)}`,
        );

        this.<%= h.inflection.pluralize(name) %> = res.records;
        this.<%= h.inflection.camelize(name, true) %>Count = res.totalRecords;
      } catch (e: any) {
        handleStoreError(this, e);
      }
    },
    async fetch<%= h.inflection.camelize(name) %>Details(id: string) {
      try {
        this.error = null;
        this.current<%= h.inflection.camelize(name) %> = await $fetchWithCookies<I<%= h.inflection.camelize(name) %>>(`/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/${id}`);
      } catch (e: any) {
        handleStoreError(this, e);
      }
    },
    async create<%= h.inflection.camelize(name) %>(<%= name %>: I<%= h.inflection.camelize(name) %>Create) {
      try {
        this.error = null;
        const new<%= h.inflection.camelize(name) %> = await $fetchWithCookies<I<%= h.inflection.camelize(name) %>, I<%= h.inflection.camelize(name) %>Create>(`/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>`, 'POST', <%= name %>);

        this.<%= h.inflection.pluralize(name) %>.push(new<%= h.inflection.camelize(name) %>);
        this.current<%= h.inflection.camelize(name) %> = new<%= h.inflection.camelize(name) %>;
      } catch (e: any) {
        handleStoreError(this, e);
      }
    },
    async update<%= h.inflection.camelize(name) %>(id: string, <%= name %>: I<%= h.inflection.camelize(name) %>Update) {
      try {
        this.error = null;
        const updated<%= h.inflection.camelize(name) %> = await $fetchWithCookies<I<%= h.inflection.camelize(name) %>, I<%= h.inflection.camelize(name) %>Update>(`/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/${id}`, 'PUT', <%= name %>);
        const idx = this.<%= h.inflection.pluralize(name) %>.findIndex((item) => item.id === updated<%= h.inflection.camelize(name) %>.id);
        this.<%= h.inflection.pluralize(name) %>.splice(idx, 1, updated<%= h.inflection.camelize(name) %>);
        this.current<%= h.inflection.camelize(name) %> = updated<%= h.inflection.camelize(name) %>;
      } catch (e: any) {
        handleStoreError(this, e);
      }
    },
    async delete<%= h.inflection.camelize(name) %>(id: string) {
      try {
        this.error = null;
        await $fetchWithCookies<I<%= h.inflection.camelize(name) %>>(`/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/${id}`, 'DELETE');
        const idx = this.<%= h.inflection.pluralize(name) %>.findIndex((item) => item.id === id);
        this.<%= h.inflection.pluralize(name) %>.splice(idx, 1);
        this.current<%= h.inflection.camelize(name) %> = undefined;
      } catch (e: any) {
        handleStoreError(this, e);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(use<%= h.inflection.camelize(name) %>Store, import.meta.hot));
}
