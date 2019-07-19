import detailsTpl from '../views/details.html';
import qs from 'query-string';
export default {
  render() {   
    let query = qs.parse(location.hash.split('?')[1]);
    let renderedDetailsTpl = template.render(detailsTpl, { id: query.id})
    $('#index').html(renderedDetailsTpl);
  }
}