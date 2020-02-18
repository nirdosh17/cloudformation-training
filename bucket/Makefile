# defining common arguments here for simplicity/reusability
MAKE_ARGS:=--profile $(AWS_PROFILE) --region $(AWS_REGION)

STACK_NAME:=cfn-training-bucket-nirdosh

BUCKET_NAME:=cfn-training-nirdosh

create-bucket:
	aws cloudformation create-stack --stack-name $(STACK_NAME) \
			--template-body file://bucket.yaml \
	    --parameters ParameterKey=BucketName,ParameterValue=$(BUCKET_NAME) $(MAKE_ARGS)

update-bucket:
	# change set name = StackName + TimeStamp
	aws cloudformation create-change-set --change-set-name $(STACK_NAME)-$(shell date +%s) \
		--stack-name $(STACK_NAME) \
		--template-body file://bucket.yaml \
    --parameters ParameterKey=BucketName,ParameterValue=$(BUCKET_NAME) $(MAKE_ARGS)

delete-bucket:
	aws cloudformation delete-stack --stack-name $(STACK_NAME) $(MAKE_ARGS)
