import Component from 'flarum/Component';

export default class Button extends Component {
    init() {
        console.log('init called');
        
        this.count = 1;
    }

    view() {
        console.log('redrawing. count: ' + this.count);

        return m('button', { onclick: this.inc.bind(this) }, this.count);
    }

    inc() {
        this.count++;
        m.redraw();
        
        console.log('inc called. count=' + this.count);
    }
}
