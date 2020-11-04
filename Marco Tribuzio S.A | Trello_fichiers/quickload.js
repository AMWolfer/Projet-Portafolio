(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{"./app/common/lib/util/is-possibly-valid-org-name.ts":function(e,r,a){"use strict";a.r(r);var i=["blank","shortcuts","search","templates"];r.default=function(e){return/^[a-z0-9_]{3,}$/.test(e)&&-1===i.indexOf(e)}},"./app/scripts/network/quick-queries.js":function(e,r){var a=["name","closed","dateLastActivity","dateLastView","datePluginDisable","enterpriseOwned","idOrganization","prefs","premiumFeatures","shortLink","shortUrl","url","creationMethod","idEnterprise"].join(","),i=[a,"desc","descData","idTags","invitations","invited","labelNames","limits","memberships","powerUps","subscribed","templateGallery"].join(","),o=[a,"subscribed"].join(","),t=["activityBlocked","avatarUrl","bio","bioData","confirmed","fullName","idEnterprise","idMemberReferrer","initials","memberType","nonPublic","products","url","username"].join(","),s=[t,"idPremOrgsAdmin"].join(","),n=["name","displayName","products","prefs","logoHash","idEnterprise","tags","limits"].join(","),d=[n,"memberships"].join(","),l=["badges","closed","dateLastActivity","desc","descData","due","dueComplete","dueReminder","idAttachmentCover","idList","idBoard","idMembers","idShort","idLabels","limits","name","pos","shortUrl","shortLink","subscribed","url","locationName","address","coordinates","cover","isTemplate","start"].join(","),c=[a,"idTags"].join(","),m=[n,"desc","descData","website","limits","billableCollaboratorCount"].join(","),u=["addAttachmentToCard","addChecklistToCard","addMemberToCard","commentCard","copyCommentCard","convertToCardFromCheckItem","createCard","copyCard","deleteAttachmentFromCard","emailCard","moveCardFromBoard","moveCardToBoard","removeChecklistFromCard","removeMemberFromCard","updateCard:idList","updateCard:closed","updateCard:due","updateCard:dueComplete","updateCheckItemStateOnCard","updateCustomFieldItem"].join(","),p=[u,"addMemberToBoard","addToOrganizationBoard","copyBoard","createBoard","createCustomField","createList","deleteCard","deleteCustomField","disablePlugin","disablePowerUp","enablePlugin","enablePowerUp","makeAdminOfBoard","makeNormalMemberOfBoard","makeObserverOfBoard","moveListFromBoard","moveListToBoard","removeFromOrganizationBoard","unconfirmedBoardInvitation","unconfirmedOrganizationInvitation","updateBoard","updateCustomField","updateList:closed"].join(","),b={lists:"open",list_fields:"name,closed,idBoard,pos,subscribed,limits,creationMethod,softLimit",cards:"visible",card_attachments:"cover",card_stickers:!0,card_fields:[l,"labels"].join(","),card_checklists:"none",enterprise:!0,enterprise_fields:"displayName",members:"all",member_fields:t,membersInvited:"all",membersInvited_fields:t,memberships_orgMemberType:!0,checklists:"none",organization:!0,organization_fields:"name,displayName,desc,descData,url,website,prefs,memberships,logoHash,products,limits,idEnterprise",organization_tags:!0,organization_enterprise:!0,organization_disable_mock:!0,myPrefs:!0,fields:i,pluginData:!0,organization_pluginData:!0},f={fields:"",actions:p,actions_display:!0,actions_limit:50,action_memberCreator_fields:s,action_reactions:!0,checklists:"none",cards:"visible",card_fields:"",card_checklists:"all",card_checklist_checkItems:"none",labels:"all",labels_limit:1e3},g={boards:"open,starred",board_fields:o,boardStars:!0,boardsInvited:"all",boardsInvited_fields:o,board_organization:!0,board_organization_fields:n,credits:"invitation,promoCode",organizations:"all",organization_fields:d,organizationsInvited:"all",organizationsInvited_fields:n,paid_account:!0},v={boards:"open",board_fields:c,board_starCounts:"organization",board_membershipCounts:"active",fields:m,paid_account:!0,enterprise:!0,memberships:"active",members:"all",tags:!0,billableCollaboratorCount:!0},_={fields:"idOrganizations",boards:"open,starred",board_fields:a,boardStars:!0,organizations:"all",organization_fields:"idBoards"},h={lists:"open",list_fields:"name,closed,idBoard,pos,subscribed,limits,creationMethod,softLimit",enterprise:!0,enterprise_fields:"displayName",members:"all",member_fields:t,membersInvited:"all",membersInvited_fields:t,memberships_orgMemberType:!0,organization:!0,organization_fields:"name,displayName,desc,descData,url,website,prefs,memberships,logoHash,products,limits,idEnterprise",organization_tags:!0,organization_enterprise:!0,organization_disable_mock:!0,myPrefs:!0,fields:i,labels:"all",labels_limit:1e3};e.exports.boardFieldsMinimal=a,e.exports.boardFieldsFull=i,e.exports.boardFieldsMinimalSubscribed=o,e.exports.memberFields=t,e.exports.memberFieldsAndPremOrgsAdmin=s,e.exports.organizationFieldsMinimal=n,e.exports.organizationFieldsMinimalMemberships=d,e.exports.cardFieldsBulk=l,e.exports.boardFieldsInOrganization=c,e.exports.organizationBoardsFields=m,e.exports.cardActions=u,e.exports.boardActions=p,e.exports.card={fields:"all",stickers:!0,attachments:!0,customFieldItems:!0,pluginData:!0},e.exports.currentBoardMinimal=b,e.exports.currentBoardSecondary=f,e.exports.currentBoardPluginData={fields:"",boardPlugins:!0,cards:"visible",card_fields:"",card_attachments:!0,card_attachment_fields:"bytes,date,edgeColor,idMember,isUpload,mimeType,name,url",card_customFieldItems:!0,customFields:!0,card_pluginData:!0,organization:!0,organization_fields:""},e.exports.memberBoards=g,e.exports.memberHeader={campaigns:!0,channels:!0,logins:!0,organizations:"all",organization_paid_account:!0,organization_fields:"name,displayName,idEnterprise,products",organization_enterprise:!0,paid_account:!0,pluginData:!0,savedSearches:!0,missedTransferDate:!0,enterpriseToExplicitlyOwnBoards:!0,enterpriseLicenses:!0,enterprises:!0,enterprise_filter:["saml","member","member-unconfirmed","owned"],enterprise_fields:"name,displayName,isRealEnterprise,idAdmins,organizationPrefs",enterpriseWithRequiredConversion:!0},e.exports.organizationBoardsPage=v,e.exports.memberQuickBoards=_,e.exports.quickBoardsSearch=function(e){return{query:e,modelTypes:"boards",board_fields:a,partial:!0}},e.exports.boardMinimalForDisplayCard=h},"./app/scripts/network/quickload.js":function(e,r,a){var i=a("./app/common/lib/util/is-possibly-valid-org-name.ts").default,o=a("./app/scripts/network/quick-queries.js"),t=function(e){try{return window.JSON.parse(e)}catch(e){return null}},s=function(e,r){var a=new XMLHttpRequest;a.open("GET",e,!0),a.setRequestHeader("Accept","application/json,text/plain"),a.setRequestHeader("X-Trello-Client-Version",window.trelloVersion||"dev-0"),a.onreadystatechange=function(){4===a.readyState&&(200!==a.status?r([a.status,a.responseText]):r(null,[t(a.responseText),a]))},a.send(null)},n=function(e,r){var a;null==r&&(r={});for(var i=[],o=/invite-token-[-a-f0-9]*=([^;]+)/g;null!=(a=p(o.exec(document.cookie),(function(e){return e[1]})));)i.push(unescape(a));if(i.length>0&&(r.invitationTokens=i.join(",")),new RegExp("^/1/search(/|$)").test(e)){var t=p(/dsc=([^;]+)/.exec(document.cookie),(function(e){return e[1]}));r.dsc=t}return[e,function(){var e=[];for(var a in r){var i=r[a];e.push([a,encodeURIComponent(i)].join("="))}return e}().join("&")].join("?")},d={},l=location.pathname.substr(1),c=function(e){if(e in d)return delete d[e]},m=function(e){if(e){var r={isLoading:!0,callbacks:[],start:Date.now(),used:!1,url:e};d[e]=r,s(e,(function(a,i){if(r.isLoading=!1,a){r.error=a;for(var o=0,t=Array.from(r.callbacks);o<t.length;o++)(0,t[o])(a)}else{r.data=i;for(var s=0,n=Array.from(r.callbacks);s<n.length;s++)(0,n[s])(null,i);setTimeout((function(){return c(e)}),1e4)}}))}},u={init:function(){if(/token=/.test(document.cookie)||/token3000=/.test(document.cookie)||/token2999=/.test(document.cookie))for(var e=n("/1/Members/me",o.memberHeader),r=0,a=Array.from([e].concat((s=void 0,d=void 0,c=void 0,u=void 0,b=void 0,""===l?[n("/1/Members/me",o.memberBoards)]:null!=(b=p(new RegExp("^/([^/]*)").exec(l),(function(e){return e[1]})))?(b=decodeURIComponent(b).toLowerCase().replace(/[-_ ]+/g," "))?[n("/1/Members/me",o.memberQuickBoards),n("/1/search",o.quickBoardsSearch(b))]:[n("/1/Members/me",o.memberQuickBoards)]:null!=(s=null!=(c=p(new RegExp("^b/([^/]+)").exec(l),(function(e){return e[1]})))?c:p(new RegExp("^board/[^/]+/([^/]+)").exec(l),(function(e){return e[1]})))?[n("/1/Boards/".concat(s),o.currentBoardMinimal),n("/1/Boards/".concat(s),o.currentBoardSecondary),n("/1/Boards/".concat(s),o.currentBoardPluginData)]:null!=(d=p(new RegExp("^c/([^/]+)").exec(l),(function(e){return e[1]})))?[n("/1/Cards/".concat(d),o.card)]:null!=(u=p(new RegExp("^([^/]+)$").exec(l),(function(e){return e[1]})))&&i(u)?[n("/1/Organizations/".concat(u),o.organizationBoardsPage)]:[])));r<a.length;r++){var t=a[r];m(t)}var s,d,c,u,b},makeUrl:n,load(e,r){var a=d[e];if(null!=a)return a.used=!0,a.isLoading?a.callbacks.push(r):(r(a.error,a.data),c(e)),function(e){for(var r={},a=0,i=["isLoading","start","used","url"];a<i.length;a++){var o=i[a];r[o]=e[o]}return r}(a);s(e,r)},clear(){for(var e in d)c(e)}};function p(e,r){return null!=e?r(e):void 0}e.exports=window.QuickLoad=u}},[["./app/scripts/network/quickload.js",0]]]);
//# sourceMappingURL=quickload.3d93a17223f3c3c299cf.js.map