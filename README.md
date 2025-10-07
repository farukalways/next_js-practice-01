## Route গঠন React tree আকারে হবে 👇

<RootLayout>                  
  <ErrorBoundary>             
    <Suspense fallback={<RootLoading />}>   
      <RootTemplate>         
        <DashboardLayout>     
          <ErrorBoundary>    
            <Suspense fallback={<DashboardLoading />}>  
              <DashboardTemplate>  
                <Page />           
              </DashboardTemplate>
            </Suspense>
          </ErrorBoundary>
        </DashboardLayout>
      </RootTemplate>
    </Suspense>
  </ErrorBoundary>
</RootLayout>
