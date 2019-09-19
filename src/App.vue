<template>
  <div 
    id="app"
  >
    <div id="content-container">

      <md-avatar class="md-large">
        <img alt="Vue logo" src="./assets/logo.jpg">
      </md-avatar>
      
      <HelloWorld msg="Welcome to David Vassallo's Landing Page" :exp_tree="experience"/>
      <div v-if="experience==true">
        <SankeyWork style="width: 100vw; height: 600px;"/>
      </div>
      <div v-else id="cy">
        <cytoscape :config="config">
          <cy-element
            v-for="def in cyElements"
            :key="`${def.data.id}`"
            :definition="def"
          />
        </cytoscape>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SankeyWork from './components/SankeyWork.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    SankeyWork
  },
  mounted: function () {
    this.$nextTick(function () {
      document.getElementById("cytoscape").setAttribute("style", "");
      this.$cytoscape.instance.then(cy => {              
        
        cy.on('tap', 'click', (e) => {
          const elemName = e.target.id()    

          // prevent double clicking
          if (Object.keys(this.elemClicked).includes(elemName)){
            return
          }
          this.elemClicked[elemName] = true

          switch (elemName) {
            case 'CyberSift':
              window.location = "https://cybersift.io/"
              return
            case 'Blog':
              window.location = "https://blog.davidvassallo.me/"
              return
            case 'LinkedIn':
              window.location = "https://www.linkedin.com/in/dvas0004/"
              return
            case 'Nerd Notes':
              window.location = "https://github.com/dvas0004/NerdNotes"
              return
            case 'Tallinn Transport':
              window.location = "https://github.com/dvas0004/tallinn-transport-gps"
              return
            case 'Youtube Channel':
              window.location = "https://www.youtube.com/user/davvas0004/videos"
              return
            case 'Skill Tree':
              this.experience = true
              return
            case 'Work Experience':
              this.cyElements = [...this.cyElements, {
                data: {
                    id: 'LinkedIn',
                    img: './icons/linkedin.png'
                  }
                },{
                  data: {
                    id: 'linkedin-edge',
                    source: 'Work Experience',
                    target: 'LinkedIn'
                  }
                }, {
                data: {
                    id: 'CyberSift',
                    img: './icons/cybersift.png'
                  }
                },{
                  data: {
                    id: 'cybersift-edge',
                    source: 'Work Experience',
                    target: 'CyberSift'
                  }
                }, {
                data: {
                    id: 'Malta News Portal',
                    img: './icons/malta-news-portal.png'
                  }
                },{
                  data: {
                    id: 'mnp-edge',
                    source: 'Work Experience',
                    target: 'Malta News Portal'
                  }
                }, {
                data: {
                    id: 'Skill Tree',
                    img: './icons/sankey.png'
                  }
                },{
                  data: {
                    id: 'skill-tree-edge',
                    source: 'Work Experience',
                    target: 'Skill Tree'
                  }
                }

              ]
              break
            case 'Side Projects':
              this.cyElements = [...this.cyElements, {
                data: {
                    id: 'Nerd Notes',
                    img: './icons/nerd-notes.png'
                  }
                },{
                  data: {
                    id: 'nerdnotes-edge',
                    source: 'Side Projects',
                    target: 'Nerd Notes'
                  }
                }, {
                data: {
                    id: 'Tallinn Transport',
                    img: './icons/tallinn-transport.png'
                  }
                },{
                  data: {
                    id: 'tallintransport-edge',
                    source: 'Side Projects',
                    target: 'Tallinn Transport'
                  }
                },{
                data: {
                    id: 'Youtube Channel',
                    img: './icons/youtube.png'
                  }
                },{
                  data: {
                    id: 'youtube-edge',
                    source: 'Side Projects',
                    target: 'Youtube Channel'
                  }
                }
              ]
              break;
            case 'My Portfolio':
              this.cyElements = [...this.cyElements, {
                data: {
                    id: 'Blog',
                    img: './icons/blog.png'
                  }
                },{
                  data: {
                    id: 'blog-edge',
                    source: 'My Portfolio',
                    target: 'Blog'
                  }
                }, {
                data: {
                    id: 'Side Projects',
                    img: './icons/code.png'
                  }
                }, {
                  data: {
                    id: 'side-projects-edge',
                    source: 'My Portfolio',
                    target: 'Side Projects'
                  }
                }, {
                data: {
                    id: 'Work Experience',
                    img: './icons/work.png'
                  }
                },{
                  data: {
                    id: 'work-edge',
                    source: 'My Portfolio',
                    target: 'Work Experience'
                  }
                }
              ]
              break;
          
            default:
              return;
          }

          // refresh layout          
          setTimeout(()=> cy.layout({
            name: 'cose',
            idealEdgeLength: 100,
            nodeOverlap: 20,
            refresh: 20,
            fit: true,
            padding: 30,
            randomize: false,
            componentSpacing: 100,
            nodeRepulsion: 2000000,
            edgeElasticity: 200,
            nestingFactor: 5,
            gravity: 80,
            numIter: 1000,
            initialTemp: 200,
            coolingFactor: 0.95,
            minTemp: 1.0
          }).run(), 1)
          
        });
        

        cy.animate({
          pan: { x: window.innerWidth/2.5, y: window.innerHeight/3 },
          zoom: 2
        }, {
          duration: 1500
        });

      })
    })
  },
  methods:{
  
  },
  data: function () {
    return {
      experience: false,
      elemClicked: {

      },
      cyElements: [
          { // root node 
            data: { 
              id: 'My Portfolio',
              img: './icons/portfolio.png'
            },
            position:{
              x: 0,
              y: 0
            }
          }
        ],
      config: { 
        style: [
          {
            selector: 'node',
            style: {
              'background-color': 'white',
              'background-image': function(ele){ return ele.data('img') },
              'background-fit': 'cover',
              'width': 40,
              'height': 40,
              'label': 'data(id)'
            }
          }, {
            selector: 'edge',
            style: {
              'control-point-distances': 100,
              'control-point-weights': 0.3,
              'curve-style': "unbundled-bezier",
              'width': 3,
              'target-arrow-shape': 'triangle',
              'line-color': '#ffaaaa',
              'target-arrow-color': '#ffaaaa'
            }
          }
        ]
      }
    }
  }
}
</script>

