<?php

/*
 * This file is part of matteocontrini/flarum-redraw-test.
 *
 * Copyright (c) 2018 Matteo Contrini.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace MC\RedrawTest;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),

];
