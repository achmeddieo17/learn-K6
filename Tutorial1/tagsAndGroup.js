import http from 'k6/http'
import { group } from 'k6'

export default function () {
    http.get('https://www.mobbi.id/', {
        tags: {judul: 'dashboard mobbi'}
    })

//     group('jual-beli-mobil', function (){
//         http.get('https://www.mobbi.id/cari-mobil')
//         http.get('https://www.mobbi.id/jual-mobil') 
//     })
}