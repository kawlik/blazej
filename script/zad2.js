class Zad2 {

    constructor( elem, inp1, val1, btn, res ) {

        // namespace
        this._elem = elem;
        this._inp1 = inp1;
        this._val1 = val1;
        this._btn = btn;
        this._res = res;

        // DOM ref
        this.elem = null;
        this.inp1 = null;
        this.val1 = null;
        this.btn = null;
        this.res = null;

        // state
        this.value = null;
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
            this.val1 = this.elem.querySelector( this._val1 );
            this.btn = this.elem.querySelector( this._btn );
            this.res = this.elem.querySelector( this._res );

            // adding events
            this.inp1.addEventListener( 'change', this.updateState );
            this.btn.addEventListener( 'click', this.generateTable );

            // disabling button
            this.btn.disabled = true;
        }
    };

    /*   *   *   *   *   *   *   *   */

    updateState = ( event ) => {
        event.preventDefault();

        // updates state if value is safe
        this.value = Number.isSafeInteger( +event.target.value ) ? +event.target.value : 1;

        // inserts value into DOM
        this.val1.textContent = this.value;

        // enables button
        this.btn.disabled = false;  

        // clears prev result
        this.res.innerHTML = null;
    };

    generateTable = ( event ) => {
        event.preventDefault();

        // creates dynamic elems
        const dynamicElems = new Array( 10 ).fill( null );

        // loop on elems
        dynamicElems.forEach(( elem, i ) => {

            // creating elem
            elem = document.createElement( 'li' );

            // styling elem
            elem.classList.add( 'list-group-item' );

            // inserting text
            elem.textContent = `${i + 1}^${this.value} = ${(i + 1)**this.value}`;

            // inserting dynsmic elem into DOM
            this.res.append( elem );
        });
    };
};


/*   *   *   *   *   *   *   *   *   *   */

document.addEventListener( 'DOMContentLoaded', () => {

    // creating new task
    const zad2 = new Zad2( '#zad2', '.input1', '.value1', '.button1', '.result1' );

    // seting up taks
    zad2.setUp();
});