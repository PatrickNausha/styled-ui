webpackJsonp([7],{2115:function(e,t,n){var o=n(0),a=n(91),r=n(447).PageRenderer;r.__esModule&&(r=r.default);var s=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2188)}},componentWillMount:function(){},render:function(){return o.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,e.exports=s},2188:function(e,t){e.exports='## Simple Toast\n\nThe toast will appear differently for mobile and desktop. Try resizing the screen and refreshing.\n\nThe toast assumes that there will only be one toast on any page. Otherwise toasts will start to cover others in render order.\n\n```react\nshowSource: true\nstate: { number: 0 }\n---\n<ToastDemo>\n\t<Button variant="primary" size="medium" onClick={() => toastRef.current.showMessage({ message: \'Hello!\' })}>Hello!</Button>\n\t<Button variant="primary" size="medium" onClick={() => toastRef.current.showMessage({ message: \'Hello w/ Icon!\', icon: <LoadingSpinner small /> })}>Hello w/ Icon!</Button>\n\t<SimpleToast ref={toastRef} showTime={1000} />\n</ToastDemo>\n```\n'}});
//# sourceMappingURL=7.21bf3d38.chunk.js.map