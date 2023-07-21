"use client";

import Image from "next/image";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";

interface ImageCardProps {
	src: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ src }) => {
	const onDownload = () => {
		window.open(src);
	};

	return (
		<Card key={src} className="rounded-lg overflow-hidden">
			<div className="relative aspect-square">
				<Image fill alt="Image" src={src} />
			</div>
			<CardFooter className="p-2">
				<Button variant="secondary" className="w-full" onClick={onDownload}>
					<Download className="h-4 w-4 mr-2" />
					Download
				</Button>
			</CardFooter>
		</Card>
	);
};
