export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
      const { BaselimeSDK, VercelPlugin, BetterHttpInstrumentation } = await import('@baselime/node-opentelemetry');
  
      const sdk = new BaselimeSDK({
        serverless: true,
        instrumentations: [
          new BetterHttpInstrumentation({ 
            plugins: [
              // Add the Vercel plugin to enable correlation between your logs and traces for projects deployed on Vercel
              new VercelPlugin()
            ],
            startIncomingSpanHook: (span, req) => {
              console.log('we are here')
              console.log(req)
              return {
                message: 'hi yall'
              }
             }

          }),
        ]
      });
  
      sdk.start();
    }
  }