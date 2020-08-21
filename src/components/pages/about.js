import React from "react";
import profilePicture from "../../../static/assets/images/Bio/ProfileImage.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Maecenas dignissim, turpis ut tincidunt pharetra, neque velit tincidunt
        metus, quis aliquam mauris mi et enim. Donec nulla odio, imperdiet vitae
        consectetur molestie, vestibulum non ipsum. Praesent condimentum libero
        quis tortor aliquet, eget posuere purus rutrum. Duis sed neque eu nisl
        facilisis cursus. Curabitur vitae venenatis lacus, mattis venenatis
        sapien. Donec accumsan ipsum vel libero gravida, et interdum nulla
        tempor. Nulla facilisi. Sed lectus lorem, venenatis accumsan mi ac,
        luctus euismod quam. Nulla blandit mollis egestas.Nulla metus nulla,
        eleifend id maximus vitae, eleifend sed lectus. Fusce sagittis tempus
        metus quis aliquet. Sed quis suscipit libero. In blandit, libero non
        dictum porta, lacus nunc dignissim felis, eget eleifend nunc lectus in
        orci. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Phasellus vitae mi turpis. Suspendisse tincidunt ligula sit amet pretium
        posuere. Vestibulum laoreet efficitur felis, sed euismod mi condimentum
        ut. Nullam at porttitor turpis, at auctor velit. Vestibulum a metus eu
        augue laoreet porta. Nunc laoreet viverra sapien non bibendum.
        Suspendisse gravida lorem eget eros mollis, id consequat enim tincidunt.
        Quisque dictum, turpis sed euismod euismod, felis dolor ullamcorper
        nisl, ut venenatis neque tortor sit amet nunc. Ut tortor arcu, ultrices
        porttitor metus ut, euismod sollicitudin ipsum. Cras augue erat, mattis
        a vehicula sit amet, blandit at risus.
      </div>
    </div>
  );
}
