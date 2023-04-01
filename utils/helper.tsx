
   export default function GH (num:number){

    let  Ghcedis = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'Ghc',
     });

     return Ghcedis.format(num)

  }

