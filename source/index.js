// Libraries
import Vue from 'vue'

// Styles
import './styles.sass'

// Components
import Dashboard from './components/dashboard/index.js'

const mainApp = new Vue({
  render: h => h(Dashboard)
})

mainApp.$mount('#cassette-main-app')
