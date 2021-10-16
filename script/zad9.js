class Zad9 {

    constructor( elem, inp1, inp2, inp3, inp4, inp5, inp6, btn, res ) {

        // namespace
        this._elem = elem;
        this._inp1 = inp1;
        this._inp2 = inp2;
        this._inp3 = inp3;
        this._inp4 = inp4;
        this._inp5 = inp5;
        this._inp6 = inp6;
        this._btn = btn;
        this._res = res;

        // DOM ref
        this.elem = null;
        this.inp1 = null;
        this.inp2 = null;
        this.inp3 = null;
        this.inp4 = null;
        this.inp5 = null;
        this.inp6 = null;
        this.btn = null;
        this.res = null;

        // stat
        this.available = null;
        this.selected = null;
    };

    /*   *   *   *   *   *   *   *   */

    setUp = () => {

        // getting an element from the DOM
        this.elem = document.querySelector( this._elem );

        // testing parent element
        if( !this.elem ) {

            throw new Error( `Elem ${this._elem} has not been found!` );

        } else {

            // creating arrays
            this.available = Array.from( Array( 49 ), ( _, i ) => i + 1 );
            this.selected = [];

            // fetching elems
            this.inp1 = this.elem.querySelector( this._inp1 );
            this.inp2 = this.elem.querySelector( this._inp2 );
            this.inp3 = this.elem.querySelector( this._inp3 );
            this.inp4 = this.elem.querySelector( this._inp4 );
            this.inp5 = this.elem.querySelector( this._inp5 );
            this.inp6 = this.elem.querySelector( this._inp6 );
            this.btn = this.elem.querySelector( this._btn );
            this.res = this.elem.querySelector( this._res );

            // adding events
            this.inp1.addEventListener( 'change', this.updateState );
            this.inp2.addEventListener( 'change', this.updateState );
            this.inp3.addEventListener( 'change', this.updateState );
            this.inp4.addEventListener( 'change', this.updateState );
            this.inp5.addEventListener( 'change', this.updateState );
            this.inp6.addEventListener( 'change', this.updateState );
            this.btn.addEventListener( 'click', this.makeDraw );

            // disabling button
            this.btn.disabled = true;
        }
    };

    /*   *   *   *   *   *   *   *   */

    makeDraw = ( event ) => {
        event.preventDefault();
        
        let allToDraw = Array.from( Array( 49 ), ( _, i ) => i + 1 );
        const winnings = [];

        for( let i = 0; i < 6; i++ ) {

            // randomly selects winning index
            const index = this.randRange( 0, allToDraw.length );
            const value = allToDraw[ index ];

            // pushes winning index into winngs array
            winnings.push( value );

            // delets winning number from next draw
            allToDraw = allToDraw.filter( elem => elem !== value );
        };
        
        this.res.textContent = `${ winnings.reduce(( p, q ) => p + ', ' +  q ) }`;
    };

    updateState = ( event ) => {
        event.preventDefault();

        // gets val ant converst to Number type
        const val = +event.target.value;

        if( this.available.includes( val )) {

            // pushes value to slected
            this.available = this.available.filter( elem => elem !== val );
            this.selected.push( val );

            // disables selected input
            event.target.disabled = true;

            // tests selected array if is full
            if( this.selected.length === 6 ) {
                this.btn.disabled = false;
            }

        } else {

            // selects 0 as default value
            event.target.value = 0;
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
    const zad9 = new Zad9( '#zad9', '.input1', '.input2', '.input3', '.input4', '.input5', '.input6', '.button1', '.result1' );

    // seting up taks
    zad9.setUp();
});