;(function () {
  "use strict"

  Vue.component("vue-create-fruit-sale", {

    template: "#create-fruit-sale-template",

    data: function () {
      return {
        newFruitSale: {}
      }
    },

    methods: {

      handleNewFruitSale: function () {
        console.log("fruit sale handled, yo")
      }

    }

  })
})();
