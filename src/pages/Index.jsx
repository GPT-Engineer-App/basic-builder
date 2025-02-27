import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Your Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            This is a bare-bones application that you can modify and build upon.
          </p>
          <div className="mt-4 p-4 border rounded-lg">
            <p className="text-center text-muted-foreground">
              Placeholder for your content.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;