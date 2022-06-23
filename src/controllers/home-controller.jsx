import moment from "moment";
import qs from "qs";

import Controller from "dbl-components/lib/js/views/view";
import eventHandler from "dbl-components/lib/js/functions/event-handler";

const endpoint = 'https://strapi-jhve.onrender.com/api/blog-posts';

export default class extends Controller {

  static jsClass = 'HomeController';

  constructor(props) {
    super(props);
    this.events = [
      ['menuMobile', this.onMenuMobile],
      ['pagination', this.onPagination]
    ];
    Object.assign(this.state, {
      articlesError: { active: false },
      articlesLoading: { active: false },
      articles: [],
      pageSize: 3
    });
  }

  componentDidMount() {
    super.componentDidMount();
    this.getData();
  }

  async getData(page = 1) {
    this.setState({ articlesLoading: { active: true } });
    const query = qs.stringify({ pagination: { page, pageSize: this.state.pageSize } });
    const payload = await fetch(`${endpoint}?${query}`).then(r => r.json());
    const newState = { articlesLoading: { active: false } };
    if (!payload.data) newState.articlesError = { active: true };
    else {
      newState.articles = payload.data.map((a, i) => ({
        name: 'article' + a.id,
        component: 'Article',
        title: a.attributes.Title,
        subtitle: 'Published at ' + moment(a.attributes.publishedAt).format('DD/MMM/YYYY'),
        excerpt: a.attributes.Post
      }));
      newState.total = Math.ceil(payload.meta.pagination.total / this.state.pageSize);
      eventHandler.dispatch('update.pagination', { total: newState.total });
    }
    this.setState(newState);
    return !!payload.data;
  }

  onMenuMobile = () => {
    eventHandler.dispatch('update.menuMobileModal', { open: true });
  }

  onPagination = async ({ pagination }) => {
    await this.getData(pagination);
    setTimeout(() => {
      const e = document.querySelector('#acAnchor');
      e.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 100);
  }

  /**
   * 
   * @param {String} sn sectionName
   * @param {Object} component component object {name:'...',....}
   */
  mutations(sn, component) {
    switch (sn) {
      case 'articles':
        return { content: this.state.articles };
      case 'header':
        return {
          classes: ['xs', 'sm'].includes(this.breakpoint) ?
            'align-items-center justify-content-between py-2 shadow-sm nav-secondary sticky-top bg-white' :
            'align-items-center justify-content-between py-2 shadow-sm nav-secondary sticky-top bg-white px-4'
        };
      case 'logo':
        return ['xs', 'sm'].includes(this.breakpoint) ?
          { height: 50, style: { marginLeft: -10 } } :
          { height: 70, style: null }
      case 'linksW':
      case 'loginW':
      case 'otherLinks':
        return { active: !['xs', 'sm'].includes(this.breakpoint) };
      case 'menuMobile':
        return { active: ['xs', 'sm'].includes(this.breakpoint) };
      case 'pagination':
        return {
          active: !!this.state.articles?.length,
          total: this.state.total
        }
      default:
        break;
    }
    return this.state[sn];
  }
}