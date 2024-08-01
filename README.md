Details

This is a search driven component that displays related content based on Search URL parameters provided by the content editor
The deployed component can be found here for understanding how it works:
```
https://dxp.squiz.cloud/organization/sales-team-us-3708/component-service/all-components/presales/related-content
```

Develop
```
npm i 
npm run dev

```


Deploy
```
npm run build
dxp-next auth login --tenant=___TENNENT_ID_HERE___
dxp-next cmp deploy ./
```


View
```
https://dxp.squiz.cloud/organization/___TENNENT_ID_HERE___/component-service/all-components
```