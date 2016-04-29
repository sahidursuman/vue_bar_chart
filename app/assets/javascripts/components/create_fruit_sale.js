;(function () {
  "use strict"

  Vue.component("vue-create-fruit-sale", {

    template: "#create-fruit-sale-template",

    data: function () {
      return {
        newFruitSale: {},
        fruitStats: []
      }
    },

    ready: function () {
      var self = this

      self.fetchFruitStats()
    },
    methods: {

      fetchFruitStats: function () {
        var self = this

        $.ajax({
          method: "GET",
          url: "/api/fruit_stats"
        }).then(function (data) {
          self.fruitStats = data
          console.log("fruit stats gotten!")
        })
      },

      handleNewFruitSale: function () {
        var self = this

        // Guard against empty variety field
        if (!self.newFruitSale.variety) { return }

        $.ajax({
          method: "POST",
          url: "/api/fruit_sales",
          data: { fruit_sale:  self.newFruitSale }
        }).then(function (data) {
          self.fetchFruitStats()
          console.log("created!", data)
        })
      }

    }

  })
})();
