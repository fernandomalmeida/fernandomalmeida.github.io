/// <reference path='../_all.ts' />
/// <reference path='../_all.ts' />
/// <reference path='../_all.ts' />
/// <reference path='../_all.ts' />
/// <reference path='../_all.ts' />
var paginaPessoal;
(function (paginaPessoal) {
    'use strict';

    var HomeCtrl = (function () {
        function HomeCtrl($scope) {
            this.$scope = $scope;
            $scope.linksCurriculo = [
                {
                    url: 'http://lattes.cnpq.br/0307827644596863',
                    label: 'Lattes'
                },
                {
                    url: 'http://br.linkedin.com/pub/fernando-mendon%C3%A7a-de-almeida/21/3/52/',
                    label: 'LinkedIn'
                },
                {
                    url: 'https://github.com/fernandomalmeida/',
                    label: 'GitHub'
                }
            ];

            $scope.linksProjetos = [
                {
                    url: 'http://fernandomalmeida.github.io/deposito/jogo_da_velha/',
                    label: 'Jogo da Velha em HTML5 + Canvas'
                }
            ];
            $scope.linksArtigos = [];
        }
        HomeCtrl.$inject = [
            '$scope'
        ];
        return HomeCtrl;
    })();
    paginaPessoal.HomeCtrl = HomeCtrl;
})(paginaPessoal || (paginaPessoal = {}));
/// <reference path='../_all.ts' />
var paginaPessoal;
(function (paginaPessoal) {
    'use strict';

    var FooterCtrl = (function () {
        function FooterCtrl($scope) {
            this.$scope = $scope;
            $scope.badges = [
                {
                    icon: "social-github",
                    url: "https://github.com/fernandomalmeida/",
                    label: "GitHub"
                },
                {
                    icon: "social-linkedin",
                    url: "http://br.linkedin.com/pub/fernando-mendon%C3%A7a-de-almeida/21/3/52/",
                    label: "LinkedIn"
                },
                {
                    icon: "mail",
                    url: "mailto:fernando.m.al.91@gmail.com",
                    label: "E-mail"
                }
            ];
        }
        FooterCtrl.$inject = [
            '$scope'
        ];
        return FooterCtrl;
    })();
    paginaPessoal.FooterCtrl = FooterCtrl;
})(paginaPessoal || (paginaPessoal = {}));
/// <reference path="_all.ts"/>
var paginaPessoal;
(function (_paginaPessoal) {
    'use strict';

    var paginaPessoal = angular.module('paginaPessoal', []).controller('homeCtrl', _paginaPessoal.HomeCtrl).controller('footerCtrl', _paginaPessoal.FooterCtrl);
})(paginaPessoal || (paginaPessoal = {}));
/// <reference path="typings/jquery/jquery.d.ts"/>
/// <reference path="typings/angularjs/angular.d.ts"/>
/// <reference path="interfaces/ILinkOption.ts" />
/// <reference path="interfaces/IIconLink.ts" />
/// <reference path="interfaces/IHomeScope.ts" />
/// <reference path="interfaces/IFooterScope.ts" />
/// <reference path="controllers/HomeCtrl.ts" />
/// <reference path="controllers/FooterCtrl.ts" />
/// <reference path="app.ts" />
//# sourceMappingURL=app.js.map
