class Zad5 {

    constructor( elem, cbx, sel, res ) {

        // namespace
        this._elem = elem;
        this._cbx = cbx;
        this._sel = sel;
        this._res = res;

        // DOM ref
        this.elem = null;
        this.cbx = null;
        this.sel = null;
        this.res = null;

        // state
        this.color = null;
        this.font = null;
    };

    /*   *   *   *   *   *   *   *   */

    setUp = () => {

        // getting an element from the DOM
        this.elem = document.querySelector( this._elem );

        // testing parent element
        if( !this.elem ) {

            throw new Error( `Elem ${this._elem} has not been found!` );

        } else {

            // fetching elems
            this.cbx = this.elem.querySelectorAll( this._cbx );
            this.sel = this.elem.querySelector( this._sel );
            this.res = this.elem.querySelector( this._res );

            // adding events
            this.cbx.forEach( elem => elem.addEventListener( 'change', this.updateColor ));
            this.sel.addEventListener( 'change', this.updateFont );
        }
    };

    /*   *   *   *   *   *   *   *   */

    updateColor = ( event ) => {
        event.preventDefault();

        // unchecking all elems
        this.cbx.forEach( elem => {
            elem.checked = false;
        });

        // checking selected itrm
        event.target.checked = true;

        // rewriting color
        this.color = event.target.value;

        // updating DOM
        this.res.style.color = this.color;
    };

    updateFont = ( event ) => {
        event.preventDefault();

        // rewriting font
        this.font = event.target.value;

        // updating DOM
        this.res.style.fontSize = this.font;
    };
};


/*   *   *   *   *   *   *   *   *   *   */

document.addEventListener( 'DOMContentLoaded', () => {

    // creating new task wiht prom date
    const zad5 = new Zad5( '#zad5', 'input[type=checkbox]', '.select1', '.result1' );

    // seting up taks
    zad5.setUp();
});