<template>
<v-chart :options="polar" style="height: 600px;"/>
</template>

<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  height: 100%;
}
</style>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/sankey'
import 'echarts/lib/component/tooltip'
import moment from 'moment'

const experience = (yrs, months, ongoing) => {
    let result;
    if (ongoing){
        result = (moment()-moment(`${months} ${yrs}`, 'MM YYYY'))/3.154e+10
    } else {
        result = yrs
        if (months){
            result = (months/12) + result
        }
    }
    
    //rounding
    result = Math.round(result*100) / 100
    return result
}

export default {
  components: {
    'v-chart': ECharts
  },
  data () {

    return {
      polar: {
            tooltip:{
                show: true,
                formatter: "{c0} years"
            },
            series: {
                type: 'sankey',
                layout:'none',
                focusNodeAdjacency: 'allEdges',
                draggable: false,
                data: [{
                    name: 'CyberSift',
                    depth: 0
                }, {
                    name: '6PM',
                    depth: 0
                }, {
                    name: 'R&D Director',
                    depth: 1
                }, {
                    name: 'CTO',
                    depth: 1
                }, {
                    name: 'Senior Full Stack Dev',
                    depth: 1
                }, {
                    name: 'DevOps Network & Security Engineer',
                    depth: 1
                }, {
                    name: 'Senior Tech Support Engineer',
                    depth: 1
                }, {
                    name: 'Tech Support Engineer',
                    depth: 1
                }, {
                    name: 'MITA (Malta Gov)',
                    depth: 0
                }, {
                    name: 'SonicWall',
                    depth: 0
                }, {
                    name: 'BlueCoat Systems',
                    depth: 0
                }, {
                    name: 'BetClic (iGaming)',
                    depth: 0
                }, {
                    name: 'Python',
                    depth: 2
                }, {
                    name: 'Java',
                    depth: 2
                }, {
                    name: 'Javascript',
                    depth: 2
                }, {
                    name: 'Pentesting',
                    depth: 2
                }, {
                    name: 'Kotlin',
                    depth: 3
                }, {
                    name: 'ReactJS',
                    depth: 3
                }, {
                    name: 'VueJS',
                    depth: 3
                }, {
                    name: 'NodeJS',
                    depth: 3
                }, {
                    name: 'Networks / Firewalls / Routing',
                    depth: 2
                }, {
                    name: 'Machine Learning',
                    depth: 2
                }, {
                    name: 'Spring Framework',
                    depth: 3
                }, {
                    name: 'Linux',
                    depth: 2
                }, {
                    name: 'Bash',
                    depth: 3
                }, {
                    name: 'Docker',
                    depth: 3
                }, {
                    name: 'ElasticSearch',
                    depth: 2
                }, {
                    name: 'SQL',
                    depth: 2
                }],
                links: [{
                    source: 'Javascript',
                    target: 'ReactJS',
                    value: experience(2015, 1, true)
                },{
                    source: 'Javascript',
                    target: 'NodeJS',
                    value: experience(5, 0)
                },{
                    source: 'Javascript',
                    target: 'VueJS',
                    value: experience(1, 7)
                },{
                    source: 'Linux',
                    target: 'Bash',
                    value: experience(2007, 1, true)
                }, {
                    source: 'Java',
                    target: 'Spring Framework',
                    value: experience(2015, 1, true)
                }, {
                    source: 'Java',
                    target: 'Kotlin',
                    value: experience(2018, 8, true)
                },{
                    source: 'CyberSift',
                    target: 'CTO',
                    value: experience(2017, 2, true)
                }, {
                    source: 'CTO',
                    target: 'Java',
                    value: experience(2017, 2, true)
                }, {
                    source: 'CTO',
                    target: 'Python',
                    value: experience(2017, 2, true)
                }, {
                    source: 'CTO',
                    target: 'ElasticSearch',
                    value: experience(2017, 2, true)
                }, {
                    source: 'CTO',
                    target: 'Javascript',
                    value: experience(2017, 2, true)
                }, {
                    source: 'CTO',
                    target: 'Machine Learning',
                    value: experience(2017, 2, true)
                }, {
                    source: 'CTO',
                    target: 'Linux',
                    value: experience(2017, 2, true)
                }, {
                    source: 'CTO',
                    target: 'Docker',
                    value: experience(2017, 11, true)
                }, {
                    source: 'CTO',
                    target: 'Pentesting',
                    value: experience(2017, 2, true)
                }, {
                    source: 'CTO',
                    target: 'SQL',
                    value: Math.round((experience(2017, 2, true)/3)*100)/100
                }, {
                    source: '6PM',
                    target: 'R&D Director',
                    value: experience(1, 9)
                }, {
                    source: 'R&D Director',
                    target: 'Python',
                    value: experience(1, 9)
                }, {
                    source: 'R&D Director',
                    target: 'Linux',
                    value: experience(1, 9)
                }, {
                    source: 'R&D Director',
                    target: 'SQL',
                    value: experience(1, 0)
                }, {
                    source: 'R&D Director',
                    target: 'Machine Learning',
                    value: experience(1, 0)
                }, {
                    source: 'R&D Director',
                    target: 'ElasticSearch',
                    value: experience(1, 0)
                }, {
                    source: 'R&D Director',
                    target: 'Pentesting',
                    value: experience(1, 0)
                }, {
                    source: 'R&D Director',
                    target: 'Javascript',
                    value: experience(1, 9)
                },{
                    source: '6PM',
                    target: 'Senior Full Stack Dev',
                    value: experience(2, 10)
                },{
                    source: 'Senior Full Stack Dev',
                    target: 'Python',
                    value: experience(2, 10)
                },{
                    source: 'Senior Full Stack Dev',
                    target: 'Linux',
                    value: experience(2, 10)
                },{
                    source: 'Senior Full Stack Dev',
                    target: 'Java',
                    value: experience(2, 10)
                },{
                    source: 'Senior Full Stack Dev',
                    target: 'Javascript',
                    value: experience(2, 10)
                },{
                    source: 'Senior Full Stack Dev',
                    target: 'SQL',
                    value: experience(1, 0)
                },{
                    source: 'Senior Full Stack Dev',
                    target: 'Networks / Firewalls / Routing',
                    value: experience(2, 10)
                }, {
                    source: 'BetClic (iGaming)',
                    target: 'DevOps Network & Security Engineer',
                    value: experience(1, 2)
                },{
                    source: 'DevOps Network & Security Engineer',
                    target: 'Networks / Firewalls / Routing',
                    value: experience(1, 2)
                },{
                    source: 'DevOps Network & Security Engineer',
                    target: 'Linux',
                    value: experience(1, 2)
                }, {
                    source: 'BlueCoat Systems',
                    target: 'Senior Tech Support Engineer',
                    value: experience(1, 4)
                }, {
                    source: 'SonicWall',
                    target: 'Senior Tech Support Engineer',
                    value: experience(2, 2)
                },{
                    source: 'Senior Tech Support Engineer',
                    target: 'Networks / Firewalls / Routing',
                    value: experience(3, 6)
                }, {
                    source: 'MITA (Malta Gov)',
                    target: 'Tech Support Engineer',
                    value: experience(0, 3)
                },{
                    source: 'Tech Support Engineer',
                    target: 'Networks / Firewalls / Routing',
                    value: experience(0, 3)
                }]
            }
        }
    }
  }
}
</script>