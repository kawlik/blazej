class Zad8 {

    constructor( elem, inp1, inp2, btn, res ) {

        // namespace
        this._elem = elem;
        this._inp1 = inp1;
        this._inp2 = inp2;
        this._btn = btn;
        this._res = res;

        // DOM ref
        this.elem = null;
        this.inp1 = null;
        this.inp2 = null;
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
            this.inp2 = this.elem.querySelector( this._inp2 );
            this.btn = this.elem.querySelector( this._btn );
            this.res = this.elem.querySelector( this._res );

            // adding events
            this.inp1.addEventListener( 'change', this.updateState );
            this.inp2.addEventListener( 'change', this.updateState );
            this.btn.addEventListener( 'click', this.makeDraw );

            // disabling button
            this.btn.disabled = true;
        }
    };

    /*   *   *   *   *   *   *   *   */

    makeDraw = ( event ) => {
        event.preventDefault();

        const val1 = +this.inp1.value;
        const val2 = +this.inp2.value;

        // testing numbers
        if( Number.isSafeInteger( val1 ) && Number.isSafeInteger( val2 )) {

            let rand1 = this.randRange( val1, val2 );
            let rand2 = this.randRange( val1, val2 );

            // prevents 2 identical numbers
            while( rand1 === rand2 ) {
                rand2 = this.randRange( val1, val2 );
            }

            this.res.textContent = `${rand1} oraz ${rand2}`;
        }
    };

    updateState = ( event ) => {
        event.preventDefault();

        const val1 = +this.inp1.value;
        const val2 = +this.inp2.value;

        // testing numbers
        if( Number.isSafeInteger( val1 ) && Number.isSafeInteger( val2 )) {

            // enabling test button
            this.btn.disabled = false;
        }
    };

    randRange = ( val1, val2 ) => {

        if( val1 > val2 ) {
            [ val1, val2 ] = [ val2, val1 ];
        }

        return Math.floor( Math.random() * ( val1 - val2 ) + val2 );
    };
};


/*   *   *   *   *   *   *   *   *   *   */

document.addEventListener( 'DOMContentLoaded', () => {

    // creating new task wiht prom date
    const zad8 = new Zad8( '#zad8', '.input1', '.input2', '.button1', '.result1' );

    // seting up taks
    zad8.setUp();
});