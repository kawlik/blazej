class Zad4 {

    constructor( elem, res, date ) {

        // namespace
        this._elem = elem;
        this._res = res;

        // DOM ref
        this.elem = null;
        this.res = null;

        // date values
        this._date = date;  // date string
        this.date = null;   // date object

        // time interval ref
        this.interval = null;
    };

    /*   *   *   *   *   *   *   *   */

    setUp = () => {

        // getting an element from the DOM
        this.elem = document.querySelector( this._elem );

        // parsing date
        this.date = Number.isNaN( Date.parse( this._date )) ? null : new Date( this._date );

        // testing parent element
        if( !this.elem || !this.date ) {

            throw new Error( `Elem ${this._elem} has not been found!` );

        } else {

            // fetching elems
            this.res = this.elem.querySelector( this._res );

            // initial update
            this.update();

            // starting countodown loop
            this.interval = setInterval( this.update, 1000 );
        }
    };

    /*   *   *   *   *   *   *   *   */

    update = () => {

        if( Date.now() > this.date.getTime()) {

            // clears interval
            clearInterval( this.interval );

        } else {

            // calcing time span
            const delta = this.date.getTime() - Date.now();

            // seting date values
            const _s = 1000;
            const _m = 60 * _s;
            const _h = 60 * _m;
            const _d = 24 * _h;

            // geting date values
            const s = Math.floor(( delta % _m ) / _s );
            const m = Math.floor(( delta % _h ) / _m );
            const h = Math.floor(( delta % _d ) / _h );
            const d = Math.floor( delta / _d );

            // updating values into DOM
            this.res.textContent = `${d} dni, ${h} godzin, ${m} minut, ${s} sekund!`;
        }
    };
};


/*   *   *   *   *   *   *   *   *   *   */

document.addEventListener( 'DOMContentLoaded', () => {

    // creating new task wiht prom date
    const zad4 = new Zad4( '#zad4', '.result1', '2022-02-01' );

    // seting up taks
    zad4.setUp();
});