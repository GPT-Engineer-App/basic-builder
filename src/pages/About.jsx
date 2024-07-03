import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>About This Application</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            This is a placeholder for the About page. You can add more information about your application here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;