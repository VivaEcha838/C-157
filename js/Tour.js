AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id)
      // Thumbnail Element
      const thumbnail = this.createThumbnail(item)
      borderEl.appendChild(thumbnail)
      // Title Text Element
      const title = this.createTitle(item, position)
      borderEl.appendChild(title)
      this.placesContainer.appendChild(borderEl);
    }

    
  },
  createBorder: function(position, id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id", id)
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {primitive: "ring", radiusInner: 4, radiusOuter: 5})
    entityEl.setAttribute("position", position)
    entityEl.setAttribute("material", {color: "blue"})

    return entityEl
  },
  createThumbnail: function(item){
    const thumbnailEl = document.createElement("a-entity")
    thumbnailEl.setAttribute("visible", true)
    thumbnailEl.setAttribute("geometry", {primitive: "circle", radius: 4})
    thumbnailEl.setAttribute("material", {src: item.url})
  },
  createTitle: function(item, position){
    const titleEl = document.createElement("a-entity")
    titleEl.setAttribute("text", {font: "exo2bold", align: "center", width: 20, color: "#eee372", value: item.title})
    var title_position = position
    title_position.y += 6
    titleEl.setAttribute("position", title_position)
    titleEl.setAttribute("visible", true)

    return titleEl
  }
});
