---
to: "src/app/composables/actions/use-<%= h.inflection.dasherize(h.inflection.underscore(name)) %>-actions.ts"
unless_exists: true
---
import { computed, ref } from 'vue';
import type { I<%= h.inflection.camelize(name) %>Create, I<%= h.inflection.camelize(name) %>Update } from '#shared/interfaces/I<%= h.inflection.camelize(name) %>';
import type { IListQuery } from '#shared/interfaces/IListQuery';
import { use<%= h.inflection.camelize(name) %>Store } from '@/store/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>';

export const use<%= h.inflection.camelize(name) %>Actions = () => {
  const store = use<%= h.inflection.camelize(name) %>Store();
  const isReading = ref(false);
  const isCreating = ref(false);
  const isUpdating = ref(false);
  const isDeleting = ref(false);

  const fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %> = async (params: IListQuery) => {
    isReading.value = true;

    await store.fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %>(params);

    isReading.value = false;
  };
  const fetch<%= h.inflection.camelize(name) %>Details = async (id: string) => {
    isReading.value = true;

    await store.fetch<%= h.inflection.camelize(name) %>Details(id);

    isReading.value = false;
  };
  const create<%= h.inflection.camelize(name) %> = async (<%= h.inflection.camelize(name, true) %>: I<%= h.inflection.camelize(name) %>Create) => {
    isCreating.value = true;

    await store.create<%= h.inflection.camelize(name) %>(<%= h.inflection.camelize(name, true) %>);

    isCreating.value = false;
  };
  const update<%= h.inflection.camelize(name) %> = async (id: string, data: I<%= h.inflection.camelize(name) %>Update) => {
    isUpdating.value = true;

    await store.update<%= h.inflection.camelize(name) %>(id, data);

    isUpdating.value = false;
  };
  const delete<%= h.inflection.camelize(name) %> = async (id: string) => {
    isDeleting.value = true;

    await store.delete<%= h.inflection.camelize(name) %>(id);

    isDeleting.value = false;
  };

  return {
    error: computed(() => store.getError),
    <%= h.inflection.pluralize(h.inflection.camelize(name, true)) %>: computed(() => store.get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>),
    <%= h.inflection.camelize(name, true) %>Count: computed(() => store.get<%= h.inflection.camelize(name) %>Count),
    current<%= h.inflection.camelize(name) %>: computed(() => store.getCurrent<%= h.inflection.camelize(name) %>),
    isReading,
    isCreating,
    isUpdating,
    isDeleting,
    fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %>,
    fetch<%= h.inflection.camelize(name) %>Details,
    create<%= h.inflection.camelize(name) %>,
    update<%= h.inflection.camelize(name) %>,
    delete<%= h.inflection.camelize(name) %>,
  };
};
