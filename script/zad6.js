class Zad6 {

    constructor( elem, inp1, inp2, inp3, inp4 ) {

        // namespace
        this._elem = elem;
        this._inp1 = inp1;
        this._inp2 = inp2;
        this._inp3 = inp3;
        this._inp4 = inp4;

        // DOM ref
        this.elem = null;
        this.inp1 = null;
        this.inp2 = null;
        this.inp3 = null;
        this.inp4 = null;

        this.bdg1 = null;
        this.bdg2 = null;
        this.bdg3 = null;
        this.bdg4 = null;
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
            this.inp4 = this.elem.querySelector( this._inp4 );
            
            this.bdg1 = this.inp1.nextElementSibling;
            this.bdg2 = this.inp2.nextElementSibling;
            this.bdg3 = this.inp3.nextElementSibling;
            this.bdg4 = this.inp4.nextElementSibling;
            
            // adding events
            this.inp1.addEventListener( 'input', e => this.validate( e, this.bdg1, /^[0-9]{2}\-[0-9]{3}$/ ));
            this.inp2.addEventListener( 'input', e => this.validate( e, this.bdg2, /^[0-9]*(0|2|4|6|8){1}$/ ));
            this.inp3.addEventListener( 'input', e => this.validate( e, this.bdg3, /^http[s]?:\/\/(www\.)?[a-zA-Z0-9]+\.[a-z]+$/ ));

            // only latin letters!!!
            this.inp4.addEventListener( 'input', e => this.validate( e, this.bdg4, /^[A-Z]{1}[a-z]+$/ ));
        }
    };

    /*   *   *   *   *   *   *   *   */

    validate = ( event, sibling, regex ) => {
        event.preventDefault();

        console.log( event.target.value );

        // tests target value
        const status = regex.test( event.target.value );

        // generates message based on status
        const message = status ? 'Podana wartość jest poprawna.' : 'Uwaga! Podana wartość nie spełnia założeń!';

        // toggles badge apperacne based on status
        sibling.classList.remove( status ? 'bg-danger' : 'bg-success' );
        sibling.classList.add( status ? 'bg-success' : 'bg-danger' );

        // inserts message into element
        sibling.textContent = message;
    };
};


/*   *   *   *   *   *   *   *   *   *   */

document.addEventListener( 'DOMContentLoaded', () => {

    // creating new task wiht prom date
    const zad6 = new Zad6( '#zad6', '.input1', '.input2', '.input3', '.input4' );

    // seting up taks
    zad6.setUp();
});