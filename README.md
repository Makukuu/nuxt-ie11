Nuxt 2 Starter project with the setup for IE11.

Unfortunatelly,  the SCADA system uses a web component based on, but not exactly IE11.
Which produces errors. Namely, e.default and n.return end up in production code (.nuxt/dist/client) 
and are not transpilled / polyfilled.
