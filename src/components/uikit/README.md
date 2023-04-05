# some notes about Styling and uikit

please use uikit wherever possible to make a consistance and controable ui. See uikit/index.tsx to see the list of available uikit components.

Avoid styling uikit comps as much as possible
Use designType for different style alternatives. you shoud be able to see the options available in autocomplete.
For a link that looks like a button use designType=“button-like-link”

# Some notes about styling

try avoiding margin => use gap on parent
try avoiding fixed height and width as much as possible. if really need a fixed size use rem, not pixel. if you need fluid responsive size, use min, max, clamp, max-size or min-height.

use var(--padding) var(--gap) var(--border-radius). adjust it like var(--padding--s
) or var(--padding--l) see the full list of css variable in _variables.scss

try avoid using media queries as much as possible => use clamp() like clamp (1rem, 1rem + 5vw, 5rem)

using vh is not recommended as on mobile screen height change alot base the address bar is visable or not and cause layout shift. wait for future css unit like svh. 

# Some other notes

instead of this:

<div>
{isVisable && 
<p>Something</p>}
</div>

Do this to avoid empty divs (empty div is bad for semantic and could conflict stylings like gaps)

{isVisable &&
<div>
<p>Something</p>
</div>
}
