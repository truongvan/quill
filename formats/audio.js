import { BlockEmbed } from '../blots/block';
import Link from './link';


class Audio extends BlockEmbed {
  static create(value) {
    const node = super.create(value);
    node.setAttribute('controls', '');
    node.setAttribute('src', this.sanitize(value));
    return node;
  }

  static sanitize(url) {
    return Link.sanitize(url); // eslint-disable-line import/no-named-as-default-member
  }

  static value(domNode) {
    return domNode.getAttribute('src');
  }

  html() {
    const { audio } = this.value();
    return `<source src="${audio}" type="audio/mpeg">`;
  }
}

Audio.blotName = 'audio';
Audio.className = 'ql-audio';
Audio.tagName = 'AUDIO';

export default Audio;