const GTMBodyScript = ({ gtmId }: { gtmId: string }) => {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
      }}
    />
  );
};

export default GTMBodyScript;
