class Zad7 {

    constructor( elem, inp1, btn, res ) {

        // namespace
        this._elem = elem;
        this._inp1 = inp1;
        this._btn = btn;
        this._res = res;

        // DOM ref
        this.elem = null;
        this.inp1 = null;
        this.btn = null;
        this.res = null;
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
            this.inp1 = this.elem.querySelector( this._inp1 );
            this.btn = this.elem.querySelector( this._btn );
            this.res = this.elem.querySelector( this._res );

            // adding events
            this.btn.addEventListener( 'click', this.censor );
        }
    };

    /*   *   *   *   *   *   *   *   */

    censor = ( event ) => {
        event.preventDefault();

        // prevents censoring whole text
        if( this.inp1.value === '' ) {
            return;
        }

        // gets values
        const censo = this.inp1.value.split( ',' );
        const text = this.res.value;

        let censored;

        for( const c of censo ) {

            // creating regex exp with flags 'i' & 'g'
            const regex = new RegExp( `${c}`, 'gi' );

            // censoring text
            censored = text.replace( regex, '*' )
        };

        // rewrites censored text
        this.res.value = censored;
    };
};


/*   *   *   *   *   *   *   *   *   *   */

document.addEventListener( 'DOMContentLoaded', () => {

    // creating new task wiht prom date
    const zad7 = new Zad7( '#zad7', '.input1', '.button1', '.result1' );

    // seting up taks
    zad7.setUp();
});