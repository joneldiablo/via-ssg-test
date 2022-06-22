import Component from "dbl-components/lib/js/component";

export default class extends Component {
  static jsClass = 'Article';
  static wrapper = 'article';
  classes = 'mb-4';
  content(children = this.props.children) {
    const { title, subtitle, excerpt } = this.props;
    return <>
      <h3 className="mb-0">{title}</h3>
      <b className="mb-3"><small>{subtitle}</small></b>
      <p>{
        excerpt.length > 200 ?
          <>{excerpt.trim().substr(0, 200)} <b>[...]</b></> :
          excerpt.trim()
      }</p>
      {children}
    </>
  }
}