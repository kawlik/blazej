class Zad1 {

    constructor( elem, inp1, inp2, inp3, btn ) {

        // namespace
        this._elem = elem;
        this._inp1 = inp1;
        this._inp2 = inp2;
        this._inp3 = inp3;
        this._btn = btn;

        // DOM ref
        this.elem = null;
        this.inp1 = null;
        this.inp2 = null;
        this.inp3 = null;
        this.btn = null;
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
            this.inp3 = this.elem.querySelector( this._inp3 );
            this.btn = this.elem.querySelector( this._btn );

            // adding events
            this.inp1.addEventListener( 'change', this.updateState );
            this.inp2.addEventListener( 'change', this.updateState );
            this.btn.addEventListener( 'click', this.makeCheck );

            // disabling button
            this.btn.disabled = true;
        }
    };

    /*   *   *   *   *   *   *   *   */

    makeCheck = ( event ) => {
        event.preventDefault();

        // geting values
        /**
         * the -> + <- sign tries to convert value to Number type
         */
        const val1 = +this.inp1.value;
        const val2 = +this.inp2.value;

        // testing numbers
        if( Number.isSafeInteger( val1 ) && Number.isSafeInteger( val2 )) {

            this.inp3.value = this.areMultiples( val1, val2 )
            ? `Liczby: ${val1} oraz ${val2} są wielokrotnościami.`
            : `Liczby: ${val1} oraz ${val2} nie są wielokrotnościami.`;
        }
    };

    updateState = ( event ) => {
        event.preventDefault();

        // geting values
        /**
         * the -> + <- sign tries to convert value to Number type
         */
        const val1 = +this.inp1.value;
        const val2 = +this.inp2.value;

        // testing numbers
        if( Number.isSafeInteger( val1 ) && Number.isSafeInteger( val2 )) {

            // enabling test button
            this.btn.disabled = false;
        }
    };

    areMultiples = ( val1, val2 ) => {

        // numbers in sequence min -> max
        if( val1 > val2 ) {
            [ val1, val2 ] = [ val2, val1 ];
        }

        return val2 % val1 === 0 ? true : false;
    };
};


/*   *   *   *   *   *   *   *   *   *   */

document.addEventListener( 'DOMContentLoaded', () => {

    // creating new task
    const zad1 = new Zad1( '#zad1', '.input1', '.input2', '.input3', '.button1' );

    // seting up taks
    zad1.setUp();
});