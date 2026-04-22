/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/

import i18n from '../../i18n'
import BergadosImg from '../assets/images/DimitriosIBergados.jpg'
import GiannisKeppas from '../assets/images/GiannisKeppas.jpg'
import panagiotatax from '../assets/images/panagiotatax.jpg'
import GiorgosKokkinos from '../assets/images/GiorgosKokkinos.jpg'
import sotiris from '../assets/images/sotiris.jpg'
import VanaP from '../assets/images/VanaP.jpeg'
import DimPapakonstantinou from '../assets/images/Papakonstantinou.jpg'

const UoWMMembers = [
    {
        name: i18n.t('vergados'),
        email: 'mailto:dvergados@uowm.gr',
        img: BergadosImg,
    },
    {
        name: i18n.t('giannis'),
        socialMedia: 'https://www.linkedin.com/in/giannis-kepas/',
        email: 'mailto:gkepas@ieee.org',
        img: GiannisKeppas,
    },
    {
        name: i18n.t('panagiotis'),
        socialMedia: 'https://www.linkedin.com/in/panagiotis-papantonis/',
        email: 'mailto:panagiotispapantonis1@gmail.com',
        img: 'https://avatars.githubusercontent.com/u/103947010?v=4',
    },
    {
        name: i18n.t('vana'),
        socialMedia: 'https://www.linkedin.com/in/vana-panagiotidou-aabba430a/',
        img: VanaP,
    },
    {
        name: i18n.t('panagiota'),
        socialMedia:
            'https://www.linkedin.com/in/taxiarchi-panagiota-20658b389',
        img: panagiotatax,
    },
    {
        name: i18n.t('dimitris'),
        socialMedia:
            'https://www.linkedin.com/in/dimitrios-papakonstantinou-44a7672b3',
        img: DimPapakonstantinou,
    },
    {
        name: i18n.t('sotiris'),
        socialMedia:
            'https://www.linkedin.com/in/sotiris-zacharopoulos-703147257',
        img: sotiris,
    },
    {
        name: i18n.t('giorgos'),
        socialMedia: '',
        img: GiorgosKokkinos,
    },
]

export default UoWMMembers
