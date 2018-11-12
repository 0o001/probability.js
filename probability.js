class Probability {

    constructor( items = [ ], { settings } = { } ) {

        this.items = items
        this.settings = settings || { maxPercent: 100 }

        let totalPercent = 0

        this.items.forEach( ( object ) => {

            if( typeof object !== 'object' ) {

                throw new TypeError( 'only objects' )

            }

            if( !object.hasOwnProperty( 'item' ) ) {

                throw 'no "item" property in the object'

            }

            if( !object.hasOwnProperty( 'percent' ) ) {

                throw 'no "percent" property in the object'

            } else {

                totalPercent += parseInt( object.percent )

            }

        } )

        if( totalPercent != this.settings.maxPercent ) {

            throw 'total percentage: ' + totalPercent + ', total percentage can only be ' + this.settings.maxPercent

        }

        this.list = [ ]

        this.items.forEach( ( object ) => {

            this.list = this.list.concat( ...Array( parseInt( object.percent ) ).fill( object.item ) )

        } )

    }

    random() {

        return this.list[ Math.floor( Math.random() * this.list.length ) ]

    }

    max() {

        return this.items.reduce( ( objectPrev, objectNext ) => parseInt( objectPrev.percent ) > parseInt( objectNext.percent ) ? objectPrev : objectNext )

    }

    min() {

        return this.items.reduce( ( objectPrev, objectNext ) => parseInt( objectPrev.percent ) < parseInt( objectNext.percent ) ? objectPrev : objectNext )

    }

    get( index ) {

        return this.items[index]

    }

}