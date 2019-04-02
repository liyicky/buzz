import Home from './components/Home.vue'
import Contact from './components/contact/Contact.vue'
import Scores from './components/scores/Scores.vue'

export const routes = [
  { path: '', component: Home },
  { path: '/contact', component: Contact },
  { path: '/scores', component: Scores },
]