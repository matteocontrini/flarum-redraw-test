import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import Button from './Button';

app.initializers.add('matteocontrini/flarum-redraw-test', () => {
    extend(TextEditor.prototype, 'controlItems', function (items) {
        let button = new Button();

        items.add('redraw-test', button);
    });
});
