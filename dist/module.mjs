import { defineNuxtModule, createResolver, installModule, addImports } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "@tgn/backend",
    configKey: "backend"
  },
  defaults: {},
  setup(options, nuxt) {
    const resolve = createResolver(import.meta.url).resolve;
    installModule("@tgn/socketio");
    addImports({
      from: "runtime/imports.ts",
      name: "useBackend"
    });
    nuxt.hook("tgn:socketio:events", (events) => {
      events.push({
        from: resolve("runtime", "socket_events"),
        name: "$backend",
        as: "$tgn/backend",
        default_export: false
      });
    });
  }
});

export { module as default };
